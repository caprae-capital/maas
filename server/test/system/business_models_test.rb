require "application_system_test_case"

class BusinessModelsTest < ApplicationSystemTestCase
  setup do
    @business_model = business_models(:one)
  end

  test "visiting the index" do
    visit business_models_url
    assert_selector "h1", text: "Business models"
  end

  test "should create business model" do
    visit business_models_url
    click_on "New business model"

    fill_in "Name", with: @business_model.name
    click_on "Create Business model"

    assert_text "Business model was successfully created"
    click_on "Back"
  end

  test "should update Business model" do
    visit business_model_url(@business_model)
    click_on "Edit this business model", match: :first

    fill_in "Name", with: @business_model.name
    click_on "Update Business model"

    assert_text "Business model was successfully updated"
    click_on "Back"
  end

  test "should destroy Business model" do
    visit business_model_url(@business_model)
    click_on "Destroy this business model", match: :first

    assert_text "Business model was successfully destroyed"
  end
end
