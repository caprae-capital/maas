require "test_helper"

class GrowthStrategiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @growth_strategy = growth_strategies(:one)
  end

  test "should get index" do
    get growth_strategies_url
    assert_response :success
  end

  test "should get new" do
    get new_growth_strategy_url
    assert_response :success
  end

  test "should create growth_strategy" do
    assert_difference("GrowthStrategy.count") do
      post growth_strategies_url, params: { growth_strategy: { name: @growth_strategy.name } }
    end

    assert_redirected_to growth_strategy_url(GrowthStrategy.last)
  end

  test "should show growth_strategy" do
    get growth_strategy_url(@growth_strategy)
    assert_response :success
  end

  test "should get edit" do
    get edit_growth_strategy_url(@growth_strategy)
    assert_response :success
  end

  test "should update growth_strategy" do
    patch growth_strategy_url(@growth_strategy), params: { growth_strategy: { name: @growth_strategy.name } }
    assert_redirected_to growth_strategy_url(@growth_strategy)
  end

  test "should destroy growth_strategy" do
    assert_difference("GrowthStrategy.count", -1) do
      delete growth_strategy_url(@growth_strategy)
    end

    assert_redirected_to growth_strategies_url
  end
end
