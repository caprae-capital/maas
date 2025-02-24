class InnovationStylesController < ApplicationController
  before_action :authenticate
  before_action :set_innovation_style, only: %i[ show edit update destroy ]

  # GET /innovation_styles or /innovation_styles.json
  def index
    @innovation_styles = InnovationStyle.all
  end

  # GET /innovation_styles/1 or /innovation_styles/1.json
  def show
  end

  # GET /innovation_styles/new
  def new
    @innovation_style = InnovationStyle.new
  end

  # GET /innovation_styles/1/edit
  def edit
  end

  # POST /innovation_styles or /innovation_styles.json
  def create
    @innovation_style = InnovationStyle.new(innovation_style_params)

    respond_to do |format|
      if @innovation_style.save
        format.html { redirect_to @innovation_style, notice: "Innovation style was successfully created." }
        format.json { render :show, status: :created, location: @innovation_style }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @innovation_style.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /innovation_styles/1 or /innovation_styles/1.json
  def update
    respond_to do |format|
      if @innovation_style.update(innovation_style_params)
        format.html { redirect_to @innovation_style, notice: "Innovation style was successfully updated." }
        format.json { render :show, status: :ok, location: @innovation_style }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @innovation_style.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /innovation_styles/1 or /innovation_styles/1.json
  def destroy
    @innovation_style.destroy!

    respond_to do |format|
      format.html { redirect_to innovation_styles_path, status: :see_other, notice: "Innovation style was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_innovation_style
      @innovation_style = InnovationStyle.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def innovation_style_params
      params.expect(innovation_style: [ :name ])
    end
end
