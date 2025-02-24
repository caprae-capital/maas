class PreferredWorkCulturesController < ApplicationController
  before_action :authenticate
  before_action :set_preferred_work_culture, only: %i[ show edit update destroy ]

  # GET /preferred_work_cultures or /preferred_work_cultures.json
  def index
    @preferred_work_cultures = PreferredWorkCulture.all
  end

  # GET /preferred_work_cultures/1 or /preferred_work_cultures/1.json
  def show
  end

  # GET /preferred_work_cultures/new
  def new
    @preferred_work_culture = PreferredWorkCulture.new
  end

  # GET /preferred_work_cultures/1/edit
  def edit
  end

  # POST /preferred_work_cultures or /preferred_work_cultures.json
  def create
    @preferred_work_culture = PreferredWorkCulture.new(preferred_work_culture_params)

    respond_to do |format|
      if @preferred_work_culture.save
        format.html { redirect_to @preferred_work_culture, notice: "Preferred work culture was successfully created." }
        format.json { render :show, status: :created, location: @preferred_work_culture }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @preferred_work_culture.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /preferred_work_cultures/1 or /preferred_work_cultures/1.json
  def update
    respond_to do |format|
      if @preferred_work_culture.update(preferred_work_culture_params)
        format.html { redirect_to @preferred_work_culture, notice: "Preferred work culture was successfully updated." }
        format.json { render :show, status: :ok, location: @preferred_work_culture }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @preferred_work_culture.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /preferred_work_cultures/1 or /preferred_work_cultures/1.json
  def destroy
    @preferred_work_culture.destroy!

    respond_to do |format|
      format.html { redirect_to preferred_work_cultures_path, status: :see_other, notice: "Preferred work culture was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_preferred_work_culture
      @preferred_work_culture = PreferredWorkCulture.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def preferred_work_culture_params
      params.expect(preferred_work_culture: [ :name ])
    end
end
