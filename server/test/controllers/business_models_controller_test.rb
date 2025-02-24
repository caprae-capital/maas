require "test_helper"

class BusinessModelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @business_model = business_models(:one)
  end

  test "should get index" do
    get business_models_url
    assert_response :success
  end

  test "should get new" do
    get new_business_model_url
    assert_response :success
  end

  test "should create business_model" do
    assert_difference("BusinessModel.count") do
      post business_models_url, params: { business_model: { name: @business_model.name } }
    end

    assert_redirected_to business_model_url(BusinessModel.last)
  end

  test "should show business_model" do
    get business_model_url(@business_model)
    assert_response :success
  end

  test "should get edit" do
    get edit_business_model_url(@business_model)
    assert_response :success
  end

  test "should update business_model" do
    patch business_model_url(@business_model), params: { business_model: { name: @business_model.name } }
    assert_redirected_to business_model_url(@business_model)
  end

  test "should destroy business_model" do
    assert_difference("BusinessModel.count", -1) do
      delete business_model_url(@business_model)
    end

    assert_redirected_to business_models_url
  end
end
