require "test_helper"

class DealStructuresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @deal_structure = deal_structures(:one)
  end

  test "should get index" do
    get deal_structures_url
    assert_response :success
  end

  test "should get new" do
    get new_deal_structure_url
    assert_response :success
  end

  test "should create deal_structure" do
    assert_difference("DealStructure.count") do
      post deal_structures_url, params: { deal_structure: { name: @deal_structure.name } }
    end

    assert_redirected_to deal_structure_url(DealStructure.last)
  end

  test "should show deal_structure" do
    get deal_structure_url(@deal_structure)
    assert_response :success
  end

  test "should get edit" do
    get edit_deal_structure_url(@deal_structure)
    assert_response :success
  end

  test "should update deal_structure" do
    patch deal_structure_url(@deal_structure), params: { deal_structure: { name: @deal_structure.name } }
    assert_redirected_to deal_structure_url(@deal_structure)
  end

  test "should destroy deal_structure" do
    assert_difference("DealStructure.count", -1) do
      delete deal_structure_url(@deal_structure)
    end

    assert_redirected_to deal_structures_url
  end
end
