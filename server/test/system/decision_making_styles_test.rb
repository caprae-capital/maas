require "application_system_test_case"

class DecisionMakingStylesTest < ApplicationSystemTestCase
  setup do
    @decision_making_style = decision_making_styles(:one)
  end

  test "visiting the index" do
    visit decision_making_styles_url
    assert_selector "h1", text: "Decision making styles"
  end

  test "should create decision making style" do
    visit decision_making_styles_url
    click_on "New decision making style"

    fill_in "Name", with: @decision_making_style.name
    click_on "Create Decision making style"

    assert_text "Decision making style was successfully created"
    click_on "Back"
  end

  test "should update Decision making style" do
    visit decision_making_style_url(@decision_making_style)
    click_on "Edit this decision making style", match: :first

    fill_in "Name", with: @decision_making_style.name
    click_on "Update Decision making style"

    assert_text "Decision making style was successfully updated"
    click_on "Back"
  end

  test "should destroy Decision making style" do
    visit decision_making_style_url(@decision_making_style)
    click_on "Destroy this decision making style", match: :first

    assert_text "Decision making style was successfully destroyed"
  end
end
