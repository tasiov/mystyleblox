require 'test_helper'

class HairsControllerTest < ActionController::TestCase
  setup do
    @hair = hairs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:hairs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create hair" do
    assert_difference('Hair.count') do
      post :create, hair: { clients: @hair.clients, education: @hair.education, equipment: @hair.equipment, experience: @hair.experience, rate: @hair.rate, style: @hair.style, user_id: @hair.user_id }
    end

    assert_redirected_to hair_path(assigns(:hair))
  end

  test "should show hair" do
    get :show, id: @hair
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @hair
    assert_response :success
  end

  test "should update hair" do
    patch :update, id: @hair, hair: { clients: @hair.clients, education: @hair.education, equipment: @hair.equipment, experience: @hair.experience, rate: @hair.rate, style: @hair.style, user_id: @hair.user_id }
    assert_redirected_to hair_path(assigns(:hair))
  end

  test "should destroy hair" do
    assert_difference('Hair.count', -1) do
      delete :destroy, id: @hair
    end

    assert_redirected_to hairs_path
  end
end
