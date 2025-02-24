require "test_helper"

class PreferredWorkCulturesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @preferred_work_culture = preferred_work_cultures(:one)
  end

  test "should get index" do
    get preferred_work_cultures_url
    assert_response :success
  end

  test "should get new" do
    get new_preferred_work_culture_url
    assert_response :success
  end

  test "should create preferred_work_culture" do
    assert_difference("PreferredWorkCulture.count") do
      post preferred_work_cultures_url, params: { preferred_work_culture: { name: @preferred_work_culture.name } }
    end

    assert_redirected_to preferred_work_culture_url(PreferredWorkCulture.last)
  end

  test "should show preferred_work_culture" do
    get preferred_work_culture_url(@preferred_work_culture)
    assert_response :success
  end

  test "should get edit" do
    get edit_preferred_work_culture_url(@preferred_work_culture)
    assert_response :success
  end

  test "should update preferred_work_culture" do
    patch preferred_work_culture_url(@preferred_work_culture), params: { preferred_work_culture: { name: @preferred_work_culture.name } }
    assert_redirected_to preferred_work_culture_url(@preferred_work_culture)
  end

  test "should destroy preferred_work_culture" do
    assert_difference("PreferredWorkCulture.count", -1) do
      delete preferred_work_culture_url(@preferred_work_culture)
    end

    assert_redirected_to preferred_work_cultures_url
  end
end
