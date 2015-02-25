class HairsController < ApplicationController
  before_action :set_hair, only: [:show, :edit, :update, :destroy]
  before_action :user_only, only: :edit 

  # GET /hairs
  # GET /hairs.json
  def index
    @hairs = Hair.all
  end

  # GET /hairs/1
  # GET /hairs/1.json
  def show
    @hair = Hair.find(params[:id])
    @image = Image.new
    @user = User.new
  end

  # GET /hairs/new
  def new
    @hair = Hair.new
  end

  # GET /hairs/1/edit
  def edit
    if current_user.hair 
      @hair = current_user.hair 
    else
      redirect_to '/'
    end
  end

  # POST /hairs
  # POST /hairs.json
  def create
    @hair = Hair.new(hair_params)

    respond_to do |format|
      if @hair.save

        if params[:images]
        #===== The magic is here ;)
        params[:images].each { |image|
          @hair.user.medias.create(image: image)
        }
      end

        format.html { redirect_to @hair, notice: 'Hair was successfully created.' }
        format.json { render :show, status: :created, location: @hair }
      else
        format.html { render :new }
        format.json { render json: @hair.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hairs/1
  # PATCH/PUT /hairs/1.json
  def update
    respond_to do |format|
      if @hair.update(hair_params)
        format.html { redirect_to @hair, notice: 'Hair was successfully updated.' }
        format.json { render :show, status: :ok, location: @hair }
      else
        format.html { render :edit }
        format.json { render json: @hair.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hairs/1
  # DELETE /hairs/1.json
  def destroy
    raise
    if @hair == current_user.hair
      @hair.destroy
      respond_to do |format|
        format.html { redirect_to hairs_url, notice: 'Hair was successfully destroyed.' }
        format.json { head :no_content }
    end
    else 
      redirect_to '/'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hair
      @hair = Hair.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def hair_params
      params.require(:hair).permit(:style, :education, :experience, :clients, :equipment, :rate, :user_id, :image, :media)
    end
end
