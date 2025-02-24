require "application_system_test_case"

class GrowthStrategiesTest < ApplicationSystemTestCase
  setup do
    @growth_strategy = growth_strategies(:one)
  end

  test "visiting the index" do
    visit growth_strategies_url
    assert_selector "h1", text: "Growth strategies"
  end

  test "should create growth strategy" do
    visit growth_strategies_url
    click_on "New growth strategy"

    fill_in "Name", with: @growth_strategy.name
    click_on "Create Growth strategy"

    assert_text "Growth strategy was successfully created"
    click_on "Back"
  end

  test "should update Growth strategy" do
    visit growth_strategy_url(@growth_strategy)
    click_on "Edit this growth strategy", match: :first

    fill_in "Name", with: @growth_strategy.name
    click_on "Update Growth strategy"

    assert_text "Growth strategy was successfully updated"
    click_on "Back"
  end

  test "should destroy Growth strategy" do
    visit growth_strategy_url(@growth_strategy)
    click_on "Destroy this growth strategy", match: :first

    assert_text "Growth strategy was successfully destroyed"
  end
end
