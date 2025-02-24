require "test_helper"

class DecisionMakingStylesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @decision_making_style = decision_making_styles(:one)
  end

  test "should get index" do
    get decision_making_styles_url
    assert_response :success
  end

  test "should get new" do
    get new_decision_making_style_url
    assert_response :success
  end

  test "should create decision_making_style" do
    assert_difference("DecisionMakingStyle.count") do
      post decision_making_styles_url, params: { decision_making_style: { name: @decision_making_style.name } }
    end

    assert_redirected_to decision_making_style_url(DecisionMakingStyle.last)
  end

  test "should show decision_making_style" do
    get decision_making_style_url(@decision_making_style)
    assert_response :success
  end

  test "should get edit" do
    get edit_decision_making_style_url(@decision_making_style)
    assert_response :success
  end

  test "should update decision_making_style" do
    patch decision_making_style_url(@decision_making_style), params: { decision_making_style: { name: @decision_making_style.name } }
    assert_redirected_to decision_making_style_url(@decision_making_style)
  end

  test "should destroy decision_making_style" do
    assert_difference("DecisionMakingStyle.count", -1) do
      delete decision_making_style_url(@decision_making_style)
    end

    assert_redirected_to decision_making_styles_url
  end
end
