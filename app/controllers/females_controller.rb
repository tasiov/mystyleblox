class FemalesController < ApplicationController
  before_action :set_female, only: [:show, :edit, :update, :destroy]
  before_action :user_only, only: :edit
  # GET /females
  # GET /females.json
  def index
    @females = Female.search(params)
  end

  # GET /females/1
  # GET /females/1.json
  def show
    @female = Female.find(params[:id])
    @user = @female.user
    @image = Image.new
    @message = Message.new
  end

  # GET /females/new
  def new
    @female = Female.new
  end

  # GET /females/1/edit
  def edit
    if current_user.female
      @female = current_user.female
    else
      redirect_to '/'
    end
  end

  # POST /females
  # POST /females.json
  def create
    @female = Female.new(female_params)

    respond_to do |format|
      if @female.save


        format.html { redirect_to @female, notice: 'Female was successfully created.' }
        format.json { render :show, status: :created, location: @female }
      else
        format.html { render :new }
        format.json { render json: @female.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /females/1
  # PATCH/PUT /females/1.json
  def update
    respond_to do |format|
      if @female.update(female_params)
        format.html { redirect_to :back, notice: 'Female was successfully updated.' }
        format.json { render :show, status: :ok, location: @female }
      else
        format.html { render :edit }
        format.json { render json: @female.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /females/1
  # DELETE /females/1.json
  def destroy
    if @female == current_user.female
      @female.destroy
      respond_to do |format|
        format.html { redirect_to females_url, notice: 'Female was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      redirect_to '/'
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_female
      @female = Female.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def female_params
      params.require(:female).permit(:height, :weight, :age, :hair_c, :hair_l, :eyes, :bust, :waist, :hips, :dress, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :style, :experience, :rate, :user_id)
    end
end
