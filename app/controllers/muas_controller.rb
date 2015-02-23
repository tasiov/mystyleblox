class MuasController < ApplicationController
  before_action :set_mua, only: [:show, :edit, :update, :destroy]
  before_action :user_only, only: :edit

  # GET /muas
  # GET /muas.json
  def index
    @muas = Mua.all
  end

  # GET /muas/1
  # GET /muas/1.json
  def show
  end

  # GET /muas/new
  def new
    @mua = Mua.new
  end

  # GET /muas/1/edit
  def edit
    if current_user.mua 
      @mua = current_user.mua 
    else
      redirect_to '/'
    end
  end

  # POST /muas
  # POST /muas.json
  def create
    @mua = Mua.new(mua_params)

    respond_to do |format|
      if @mua.save
        format.html { redirect_to @mua, notice: 'Mua was successfully created.' }
        format.json { render :show, status: :created, location: @mua }
      else
        format.html { render :new }
        format.json { render json: @mua.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /muas/1
  # PATCH/PUT /muas/1.json
  def update
    respond_to do |format|
      if @mua.update(mua_params)
        format.html { redirect_to @mua, notice: 'Mua was successfully updated.' }
        format.json { render :show, status: :ok, location: @mua }
      else
        format.html { render :edit }
        format.json { render json: @mua.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /muas/1
  # DELETE /muas/1.json
  def destroy
    if @mua == current_user.mua 
      @mua.destroy
      respond_to do |format|
        format.html { redirect_to muas_url, notice: 'Mua was successfully destroyed.' }
        format.json { head :no_content }
      end
    else 
      redirect_to '/'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mua
      @mua = Mua.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mua_params
      params.require(:mua).permit(:style, :education, :experience, :clients, :equipment, :rate, :user_id)
    end
end
