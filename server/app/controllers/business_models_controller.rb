class BusinessModelsController < ApplicationController
  before_action :authenticate
  before_action :set_business_model, only: %i[ show edit update destroy ]

  # GET /business_models or /business_models.json
  def index
    @business_models = BusinessModel.all
  end

  # GET /business_models/1 or /business_models/1.json
  def show
  end

  # GET /business_models/new
  def new
    @business_model = BusinessModel.new
  end

  # GET /business_models/1/edit
  def edit
  end

  # POST /business_models or /business_models.json
  def create
    @business_model = BusinessModel.new(business_model_params)

    respond_to do |format|
      if @business_model.save
        format.html { redirect_to @business_model, notice: "Business model was successfully created." }
        format.json { render :show, status: :created, location: @business_model }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @business_model.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /business_models/1 or /business_models/1.json
  def update
    respond_to do |format|
      if @business_model.update(business_model_params)
        format.html { redirect_to @business_model, notice: "Business model was successfully updated." }
        format.json { render :show, status: :ok, location: @business_model }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @business_model.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /business_models/1 or /business_models/1.json
  def destroy
    @business_model.destroy!

    respond_to do |format|
      format.html { redirect_to business_models_path, status: :see_other, notice: "Business model was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_business_model
      @business_model = BusinessModel.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def business_model_params
      params.expect(business_model: [ :name ])
    end
end
