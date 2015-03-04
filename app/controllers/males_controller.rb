class MalesController < ApplicationController
  before_action :set_male, only: [:show, :edit, :update, :destroy]
  before_action :user_only, only: :edit 

  # GET /males
  # GET /males.json
  def index
    @males = Male.search(params)
  end

  # GET /males/1
  # GET /males/1.json
  def show
    @male = Male.find(params[:id])
    @user = @male.user
    @image = Image.new
  end

  # GET /males/new
  def new
    @male = Male.new
  end

  # GET /males/1/edit
  def edit
    if current_user.male 
      @male = current_user.male 
    else
      redirect_to '/'
    end
  end

  # POST /males
  # POST /males.json
  def create
    @male = Male.new(male_params)

    respond_to do |format|
      if @male.save


        format.html { redirect_to @male, notice: 'Male was successfully created.' }
        format.json { render :show, status: :created, location: @male }
      else
        format.html { render :new }
        format.json { render json: @male.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /males/1
  # PATCH/PUT /males/1.json
  def update
    respond_to do |format|
      if @male.update(male_params)
        format.html { redirect_to @male, notice: 'Male was successfully updated.' }
        format.json { render :show, status: :ok, location: @male }
      else
        format.html { render :edit }
        format.json { render json: @male.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /males/1
  # DELETE /males/1.json
  def destroy
    if @male == current_user.male 
      @male.destroy
      respond_to do |format|
        format.html { redirect_to males_url, notice: 'Male was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      redirect_to '/'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_male
      @male = Male.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def male_params
      params.require(:male).permit(:height, :weight, :age, :hair_c, :hair_l, :eyes, :suit, :chest, :pant, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :experience, :rate, :user_id)
    end
end
