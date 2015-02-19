require 'test_helper'

class MalesControllerTest < ActionController::TestCase
  setup do
    @male = males(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:males)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create male" do
    assert_difference('Male.count') do
      post :create, male: { age: @male.age, chest: @male.chest, experience: @male.experience, eyes: @male.eyes, hair_c: @male.hair_c, hair_l: @male.hair_l, height: @male.height, nudity: @male.nudity, pant: @male.pant, pierce: @male.pierce, rate: @male.rate, scar: @male.scar, shoes: @male.shoes, skin: @male.skin, suit: @male.suit, tattoo: @male.tattoo, user_id: @male.user_id, weight: @male.weight }
    end

    assert_redirected_to male_path(assigns(:male))
  end

  test "should show male" do
    get :show, id: @male
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @male
    assert_response :success
  end

  test "should update male" do
    patch :update, id: @male, male: { age: @male.age, chest: @male.chest, experience: @male.experience, eyes: @male.eyes, hair_c: @male.hair_c, hair_l: @male.hair_l, height: @male.height, nudity: @male.nudity, pant: @male.pant, pierce: @male.pierce, rate: @male.rate, scar: @male.scar, shoes: @male.shoes, skin: @male.skin, suit: @male.suit, tattoo: @male.tattoo, user_id: @male.user_id, weight: @male.weight }
    assert_redirected_to male_path(assigns(:male))
  end

  test "should destroy male" do
    assert_difference('Male.count', -1) do
      delete :destroy, id: @male
    end

    assert_redirected_to males_path
  end
end
