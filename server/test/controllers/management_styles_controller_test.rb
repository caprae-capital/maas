require "test_helper"

class ManagementStylesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @management_style = management_styles(:one)
  end

  test "should get index" do
    get management_styles_url
    assert_response :success
  end

  test "should get new" do
    get new_management_style_url
    assert_response :success
  end

  test "should create management_style" do
    assert_difference("ManagementStyle.count") do
      post management_styles_url, params: { management_style: { name: @management_style.name } }
    end

    assert_redirected_to management_style_url(ManagementStyle.last)
  end

  test "should show management_style" do
    get management_style_url(@management_style)
    assert_response :success
  end

  test "should get edit" do
    get edit_management_style_url(@management_style)
    assert_response :success
  end

  test "should update management_style" do
    patch management_style_url(@management_style), params: { management_style: { name: @management_style.name } }
    assert_redirected_to management_style_url(@management_style)
  end

  test "should destroy management_style" do
    assert_difference("ManagementStyle.count", -1) do
      delete management_style_url(@management_style)
    end

    assert_redirected_to management_styles_url
  end
end
