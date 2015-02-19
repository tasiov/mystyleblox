require 'test_helper'

class MuAsControllerTest < ActionController::TestCase
  setup do
    @mua = muas(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:muas)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mua" do
    assert_difference('Mua.count') do
      post :create, mua: { clients: @mua.clients, education: @mua.education, equipment: @mua.equipment, experience: @mua.experience, rate: @mua.rate, style: @mua.style, user_id: @mua.user_id }
    end

    assert_redirected_to mua_path(assigns(:mua))
  end

  test "should show mua" do
    get :show, id: @mua
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @mua
    assert_response :success
  end

  test "should update mua" do
    patch :update, id: @mua, mua: { clients: @mua.clients, education: @mua.education, equipment: @mua.equipment, experience: @mua.experience, rate: @mua.rate, style: @mua.style, user_id: @mua.user_id }
    assert_redirected_to mua_path(assigns(:mua))
  end

  test "should destroy mua" do
    assert_difference('Mua.count', -1) do
      delete :destroy, id: @mua
    end

    assert_redirected_to muas_path
  end
end
