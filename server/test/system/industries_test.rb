require "application_system_test_case"

class IndustriesTest < ApplicationSystemTestCase
  setup do
    @industry = industries(:one)
  end

  test "visiting the index" do
    visit industries_url
    assert_selector "h1", text: "Industries"
  end

  test "should create industry" do
    visit industries_url
    click_on "New industry"

    fill_in "Name", with: @industry.name
    click_on "Create Industry"

    assert_text "Industry was successfully created"
    click_on "Back"
  end

  test "should update Industry" do
    visit industry_url(@industry)
    click_on "Edit this industry", match: :first

    fill_in "Name", with: @industry.name
    click_on "Update Industry"

    assert_text "Industry was successfully updated"
    click_on "Back"
  end

  test "should destroy Industry" do
    visit industry_url(@industry)
    click_on "Destroy this industry", match: :first

    assert_text "Industry was successfully destroyed"
  end
end
