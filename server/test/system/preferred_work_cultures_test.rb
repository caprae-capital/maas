require "application_system_test_case"

class PreferredWorkCulturesTest < ApplicationSystemTestCase
  setup do
    @preferred_work_culture = preferred_work_cultures(:one)
  end

  test "visiting the index" do
    visit preferred_work_cultures_url
    assert_selector "h1", text: "Preferred work cultures"
  end

  test "should create preferred work culture" do
    visit preferred_work_cultures_url
    click_on "New preferred work culture"

    fill_in "Name", with: @preferred_work_culture.name
    click_on "Create Preferred work culture"

    assert_text "Preferred work culture was successfully created"
    click_on "Back"
  end

  test "should update Preferred work culture" do
    visit preferred_work_culture_url(@preferred_work_culture)
    click_on "Edit this preferred work culture", match: :first

    fill_in "Name", with: @preferred_work_culture.name
    click_on "Update Preferred work culture"

    assert_text "Preferred work culture was successfully updated"
    click_on "Back"
  end

  test "should destroy Preferred work culture" do
    visit preferred_work_culture_url(@preferred_work_culture)
    click_on "Destroy this preferred work culture", match: :first

    assert_text "Preferred work culture was successfully destroyed"
  end
end
