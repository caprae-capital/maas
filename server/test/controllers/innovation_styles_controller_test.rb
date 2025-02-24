require "test_helper"

class InnovationStylesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @innovation_style = innovation_styles(:one)
  end

  test "should get index" do
    get innovation_styles_url
    assert_response :success
  end

  test "should get new" do
    get new_innovation_style_url
    assert_response :success
  end

  test "should create innovation_style" do
    assert_difference("InnovationStyle.count") do
      post innovation_styles_url, params: { innovation_style: { name: @innovation_style.name } }
    end

    assert_redirected_to innovation_style_url(InnovationStyle.last)
  end

  test "should show innovation_style" do
    get innovation_style_url(@innovation_style)
    assert_response :success
  end

  test "should get edit" do
    get edit_innovation_style_url(@innovation_style)
    assert_response :success
  end

  test "should update innovation_style" do
    patch innovation_style_url(@innovation_style), params: { innovation_style: { name: @innovation_style.name } }
    assert_redirected_to innovation_style_url(@innovation_style)
  end

  test "should destroy innovation_style" do
    assert_difference("InnovationStyle.count", -1) do
      delete innovation_style_url(@innovation_style)
    end

    assert_redirected_to innovation_styles_url
  end
end
