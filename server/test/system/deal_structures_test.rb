require "application_system_test_case"

class DealStructuresTest < ApplicationSystemTestCase
  setup do
    @deal_structure = deal_structures(:one)
  end

  test "visiting the index" do
    visit deal_structures_url
    assert_selector "h1", text: "Deal structures"
  end

  test "should create deal structure" do
    visit deal_structures_url
    click_on "New deal structure"

    fill_in "Name", with: @deal_structure.name
    click_on "Create Deal structure"

    assert_text "Deal structure was successfully created"
    click_on "Back"
  end

  test "should update Deal structure" do
    visit deal_structure_url(@deal_structure)
    click_on "Edit this deal structure", match: :first

    fill_in "Name", with: @deal_structure.name
    click_on "Update Deal structure"

    assert_text "Deal structure was successfully updated"
    click_on "Back"
  end

  test "should destroy Deal structure" do
    visit deal_structure_url(@deal_structure)
    click_on "Destroy this deal structure", match: :first

    assert_text "Deal structure was successfully destroyed"
  end
end
