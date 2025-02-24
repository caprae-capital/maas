class ManagementStylesController < ApplicationController
  before_action :authenticate
  before_action :set_management_style, only: %i[ show edit update destroy ]

  # GET /management_styles or /management_styles.json
  def index
    @management_styles = ManagementStyle.all
  end

  # GET /management_styles/1 or /management_styles/1.json
  def show
  end

  # GET /management_styles/new
  def new
    @management_style = ManagementStyle.new
  end

  # GET /management_styles/1/edit
  def edit
  end

  # POST /management_styles or /management_styles.json
  def create
    @management_style = ManagementStyle.new(management_style_params)

    respond_to do |format|
      if @management_style.save
        format.html { redirect_to @management_style, notice: "Management style was successfully created." }
        format.json { render :show, status: :created, location: @management_style }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @management_style.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /management_styles/1 or /management_styles/1.json
  def update
    respond_to do |format|
      if @management_style.update(management_style_params)
        format.html { redirect_to @management_style, notice: "Management style was successfully updated." }
        format.json { render :show, status: :ok, location: @management_style }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @management_style.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /management_styles/1 or /management_styles/1.json
  def destroy
    @management_style.destroy!

    respond_to do |format|
      format.html { redirect_to management_styles_path, status: :see_other, notice: "Management style was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_management_style
      @management_style = ManagementStyle.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def management_style_params
      params.expect(management_style: [ :name ])
    end
end
