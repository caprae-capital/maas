require "application_system_test_case"

class DealBreakersTest < ApplicationSystemTestCase
  setup do
    @deal_breaker = deal_breakers(:one)
  end

  test "visiting the index" do
    visit deal_breakers_url
    assert_selector "h1", text: "Deal breakers"
  end

  test "should create deal breaker" do
    visit deal_breakers_url
    click_on "New deal breaker"

    fill_in "Name", with: @deal_breaker.name
    click_on "Create Deal breaker"

    assert_text "Deal breaker was successfully created"
    click_on "Back"
  end

  test "should update Deal breaker" do
    visit deal_breaker_url(@deal_breaker)
    click_on "Edit this deal breaker", match: :first

    fill_in "Name", with: @deal_breaker.name
    click_on "Update Deal breaker"

    assert_text "Deal breaker was successfully updated"
    click_on "Back"
  end

  test "should destroy Deal breaker" do
    visit deal_breaker_url(@deal_breaker)
    click_on "Destroy this deal breaker", match: :first

    assert_text "Deal breaker was successfully destroyed"
  end
end
