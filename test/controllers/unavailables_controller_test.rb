require 'test_helper'

class UnavailablesControllerTest < ActionController::TestCase
  setup do
    @unavailable = unavailables(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:unavailables)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create unavailable" do
    assert_difference('Unavailable.count') do
      post :create, unavailable: { date: @unavailable.date, user_id: @unavailable.user_id }
    end

    assert_redirected_to unavailable_path(assigns(:unavailable))
  end

  test "should show unavailable" do
    get :show, id: @unavailable
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @unavailable
    assert_response :success
  end

  test "should update unavailable" do
    patch :update, id: @unavailable, unavailable: { date: @unavailable.date, user_id: @unavailable.user_id }
    assert_redirected_to unavailable_path(assigns(:unavailable))
  end

  test "should destroy unavailable" do
    assert_difference('Unavailable.count', -1) do
      delete :destroy, id: @unavailable
    end

    assert_redirected_to unavailables_path
  end
end
