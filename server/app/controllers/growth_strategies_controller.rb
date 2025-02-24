class GrowthStrategiesController < ApplicationController
  before_action :authenticate
  before_action :set_growth_strategy, only: %i[ show edit update destroy ]

  # GET /growth_strategies or /growth_strategies.json
  def index
    @growth_strategies = GrowthStrategy.all
  end

  # GET /growth_strategies/1 or /growth_strategies/1.json
  def show
  end

  # GET /growth_strategies/new
  def new
    @growth_strategy = GrowthStrategy.new
  end

  # GET /growth_strategies/1/edit
  def edit
  end

  # POST /growth_strategies or /growth_strategies.json
  def create
    @growth_strategy = GrowthStrategy.new(growth_strategy_params)

    respond_to do |format|
      if @growth_strategy.save
        format.html { redirect_to @growth_strategy, notice: "Growth strategy was successfully created." }
        format.json { render :show, status: :created, location: @growth_strategy }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @growth_strategy.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /growth_strategies/1 or /growth_strategies/1.json
  def update
    respond_to do |format|
      if @growth_strategy.update(growth_strategy_params)
        format.html { redirect_to @growth_strategy, notice: "Growth strategy was successfully updated." }
        format.json { render :show, status: :ok, location: @growth_strategy }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @growth_strategy.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /growth_strategies/1 or /growth_strategies/1.json
  def destroy
    @growth_strategy.destroy!

    respond_to do |format|
      format.html { redirect_to growth_strategies_path, status: :see_other, notice: "Growth strategy was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_growth_strategy
      @growth_strategy = GrowthStrategy.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def growth_strategy_params
      params.expect(growth_strategy: [ :name ])
    end
end
