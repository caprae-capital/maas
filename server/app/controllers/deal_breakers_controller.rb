class DealBreakersController < ApplicationController
  before_action :authenticate
  before_action :set_deal_breaker, only: %i[ show edit update destroy ]

  # GET /deal_breakers or /deal_breakers.json
  def index
    @deal_breakers = DealBreaker.all
  end

  # GET /deal_breakers/1 or /deal_breakers/1.json
  def show
  end

  # GET /deal_breakers/new
  def new
    @deal_breaker = DealBreaker.new
  end

  # GET /deal_breakers/1/edit
  def edit
  end

  # POST /deal_breakers or /deal_breakers.json
  def create
    @deal_breaker = DealBreaker.new(deal_breaker_params)

    respond_to do |format|
      if @deal_breaker.save
        format.html { redirect_to @deal_breaker, notice: "Deal breaker was successfully created." }
        format.json { render :show, status: :created, location: @deal_breaker }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @deal_breaker.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /deal_breakers/1 or /deal_breakers/1.json
  def update
    respond_to do |format|
      if @deal_breaker.update(deal_breaker_params)
        format.html { redirect_to @deal_breaker, notice: "Deal breaker was successfully updated." }
        format.json { render :show, status: :ok, location: @deal_breaker }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @deal_breaker.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /deal_breakers/1 or /deal_breakers/1.json
  def destroy
    @deal_breaker.destroy!

    respond_to do |format|
      format.html { redirect_to deal_breakers_path, status: :see_other, notice: "Deal breaker was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_deal_breaker
      @deal_breaker = DealBreaker.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def deal_breaker_params
      params.expect(deal_breaker: [ :name ])
    end
end
