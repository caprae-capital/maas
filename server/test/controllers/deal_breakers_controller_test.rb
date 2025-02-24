require "test_helper"

class DealBreakersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @deal_breaker = deal_breakers(:one)
  end

  test "should get index" do
    get deal_breakers_url
    assert_response :success
  end

  test "should get new" do
    get new_deal_breaker_url
    assert_response :success
  end

  test "should create deal_breaker" do
    assert_difference("DealBreaker.count") do
      post deal_breakers_url, params: { deal_breaker: { name: @deal_breaker.name } }
    end

    assert_redirected_to deal_breaker_url(DealBreaker.last)
  end

  test "should show deal_breaker" do
    get deal_breaker_url(@deal_breaker)
    assert_response :success
  end

  test "should get edit" do
    get edit_deal_breaker_url(@deal_breaker)
    assert_response :success
  end

  test "should update deal_breaker" do
    patch deal_breaker_url(@deal_breaker), params: { deal_breaker: { name: @deal_breaker.name } }
    assert_redirected_to deal_breaker_url(@deal_breaker)
  end

  test "should destroy deal_breaker" do
    assert_difference("DealBreaker.count", -1) do
      delete deal_breaker_url(@deal_breaker)
    end

    assert_redirected_to deal_breakers_url
  end
end
