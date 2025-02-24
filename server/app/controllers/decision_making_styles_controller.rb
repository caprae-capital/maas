class DecisionMakingStylesController < ApplicationController
  before_action :authenticate
  before_action :set_decision_making_style, only: %i[ show edit update destroy ]

  # GET /decision_making_styles or /decision_making_styles.json
  def index
    @decision_making_styles = DecisionMakingStyle.all
  end

  # GET /decision_making_styles/1 or /decision_making_styles/1.json
  def show
  end

  # GET /decision_making_styles/new
  def new
    @decision_making_style = DecisionMakingStyle.new
  end

  # GET /decision_making_styles/1/edit
  def edit
  end

  # POST /decision_making_styles or /decision_making_styles.json
  def create
    @decision_making_style = DecisionMakingStyle.new(decision_making_style_params)

    respond_to do |format|
      if @decision_making_style.save
        format.html { redirect_to @decision_making_style, notice: "Decision making style was successfully created." }
        format.json { render :show, status: :created, location: @decision_making_style }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @decision_making_style.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /decision_making_styles/1 or /decision_making_styles/1.json
  def update
    respond_to do |format|
      if @decision_making_style.update(decision_making_style_params)
        format.html { redirect_to @decision_making_style, notice: "Decision making style was successfully updated." }
        format.json { render :show, status: :ok, location: @decision_making_style }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @decision_making_style.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /decision_making_styles/1 or /decision_making_styles/1.json
  def destroy
    @decision_making_style.destroy!

    respond_to do |format|
      format.html { redirect_to decision_making_styles_path, status: :see_other, notice: "Decision making style was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_decision_making_style
      @decision_making_style = DecisionMakingStyle.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def decision_making_style_params
      params.expect(decision_making_style: [ :name ])
    end
end
