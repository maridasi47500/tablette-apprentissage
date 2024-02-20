require "test_helper"

class HelloControllerTest < ActionDispatch::IntegrationTest
  test "should get welcome" do
    get hello_welcome_url
    assert_response :success
  end
end
