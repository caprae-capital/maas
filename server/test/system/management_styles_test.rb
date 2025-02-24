require "application_system_test_case"

class ManagementStylesTest < ApplicationSystemTestCase
  setup do
    @management_style = management_styles(:one)
  end

  test "visiting the index" do
    visit management_styles_url
    assert_selector "h1", text: "Management styles"
  end

  test "should create management style" do
    visit management_styles_url
    click_on "New management style"

    fill_in "Name", with: @management_style.name
    click_on "Create Management style"

    assert_text "Management style was successfully created"
    click_on "Back"
  end

  test "should update Management style" do
    visit management_style_url(@management_style)
    click_on "Edit this management style", match: :first

    fill_in "Name", with: @management_style.name
    click_on "Update Management style"

    assert_text "Management style was successfully updated"
    click_on "Back"
  end

  test "should destroy Management style" do
    visit management_style_url(@management_style)
    click_on "Destroy this management style", match: :first

    assert_text "Management style was successfully destroyed"
  end
end
