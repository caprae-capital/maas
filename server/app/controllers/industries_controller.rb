class IndustriesController < ApplicationController
  before_action :authenticate
  before_action :set_industry, only: %i[ show edit update destroy ]

  # GET /industries or /industries.json
  def index
    @industries = Industry.all
  end

  # GET /industries/1 or /industries/1.json
  def show
  end

  # GET /industries/new
  def new
    @industry = Industry.new
  end

  # GET /industries/1/edit
  def edit
  end

  # POST /industries or /industries.json
  def create
    @industry = Industry.new(industry_params)

    respond_to do |format|
      if @industry.save
        format.html { redirect_to @industry, notice: "Industry was successfully created." }
        format.json { render :show, status: :created, location: @industry }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @industry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /industries/1 or /industries/1.json
  def update
    respond_to do |format|
      if @industry.update(industry_params)
        format.html { redirect_to @industry, notice: "Industry was successfully updated." }
        format.json { render :show, status: :ok, location: @industry }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @industry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /industries/1 or /industries/1.json
  def destroy
    @industry.destroy!

    respond_to do |format|
      format.html { redirect_to industries_path, status: :see_other, notice: "Industry was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_industry
      @industry = Industry.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def industry_params
      params.expect(industry: [ :name ])
    end
end
