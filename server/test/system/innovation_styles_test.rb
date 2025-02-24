require "application_system_test_case"

class InnovationStylesTest < ApplicationSystemTestCase
  setup do
    @innovation_style = innovation_styles(:one)
  end

  test "visiting the index" do
    visit innovation_styles_url
    assert_selector "h1", text: "Innovation styles"
  end

  test "should create innovation style" do
    visit innovation_styles_url
    click_on "New innovation style"

    fill_in "Name", with: @innovation_style.name
    click_on "Create Innovation style"

    assert_text "Innovation style was successfully created"
    click_on "Back"
  end

  test "should update Innovation style" do
    visit innovation_style_url(@innovation_style)
    click_on "Edit this innovation style", match: :first

    fill_in "Name", with: @innovation_style.name
    click_on "Update Innovation style"

    assert_text "Innovation style was successfully updated"
    click_on "Back"
  end

  test "should destroy Innovation style" do
    visit innovation_style_url(@innovation_style)
    click_on "Destroy this innovation style", match: :first

    assert_text "Innovation style was successfully destroyed"
  end
end
