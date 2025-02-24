class DealStructuresController < ApplicationController
  before_action :authenticate
  before_action :set_deal_structure, only: %i[ show edit update destroy ]

  # GET /deal_structures or /deal_structures.json
  def index
    @deal_structures = DealStructure.all
  end

  # GET /deal_structures/1 or /deal_structures/1.json
  def show
  end

  # GET /deal_structures/new
  def new
    @deal_structure = DealStructure.new
  end

  # GET /deal_structures/1/edit
  def edit
  end

  # POST /deal_structures or /deal_structures.json
  def create
    @deal_structure = DealStructure.new(deal_structure_params)

    respond_to do |format|
      if @deal_structure.save
        format.html { redirect_to @deal_structure, notice: "Deal structure was successfully created." }
        format.json { render :show, status: :created, location: @deal_structure }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @deal_structure.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /deal_structures/1 or /deal_structures/1.json
  def update
    respond_to do |format|
      if @deal_structure.update(deal_structure_params)
        format.html { redirect_to @deal_structure, notice: "Deal structure was successfully updated." }
        format.json { render :show, status: :ok, location: @deal_structure }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @deal_structure.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /deal_structures/1 or /deal_structures/1.json
  def destroy
    @deal_structure.destroy!

    respond_to do |format|
      format.html { redirect_to deal_structures_path, status: :see_other, notice: "Deal structure was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_deal_structure
      @deal_structure = DealStructure.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def deal_structure_params
      params.expect(deal_structure: [ :name ])
    end
end
