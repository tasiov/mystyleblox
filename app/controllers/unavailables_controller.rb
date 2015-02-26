class UnavailablesController < ApplicationController
  before_action :set_unavailable, only: [:show, :edit, :update, :destroy]

  # GET /unavailables
  # GET /unavailables.json
  def index
    @unavailables = Unavailable.all
  end

  # GET /unavailables/1
  # GET /unavailables/1.json
  def show
  end

  # GET /unavailables/new
  def new
    @unavailable = Unavailable.new
  end

  # GET /unavailables/1/edit
  def edit
  end

  # POST /unavailables
  # POST /unavailables.json
  def create
    @unavailable = Unavailable.new(unavailable_params)

    respond_to do |format|
      if @unavailable.save
        format.html { redirect_to @unavailable, notice: 'Unavailable was successfully created.' }
        format.json { render :show, status: :created, location: @unavailable }
      else
        format.html { render :new }
        format.json { render json: @unavailable.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /unavailables/1
  # PATCH/PUT /unavailables/1.json
  def update
    respond_to do |format|
      if @unavailable.update(unavailable_params)
        format.html { redirect_to @unavailable, notice: 'Unavailable was successfully updated.' }
        format.json { render :show, status: :ok, location: @unavailable }
      else
        format.html { render :edit }
        format.json { render json: @unavailable.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /unavailables/1
  # DELETE /unavailables/1.json
  def destroy
    @unavailable.destroy
    respond_to do |format|
      format.html { redirect_to unavailables_url, notice: 'Unavailable was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_unavailable
      @unavailable = Unavailable.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def unavailable_params
      params.require(:unavailable).permit(:user_id, :date)
    end
end
