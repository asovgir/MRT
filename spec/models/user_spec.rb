require 'spec_helper'

describe User do

  before do
    @user = User.new(name: "Example User", email: "user@example.com")
  end

  subject { @user }

  it { should respond_to(:name) }
  it { should respond_to(:email) }
  
  it { should be_valid }

  describe "when name is not present" do
  	before { @user.name = " " }
  	it { should_not be_valid }
  end

  describe "when email is not present" do 
  	before { @user.email = " " }
  	it { should_not be_valid }
  end

  describe "when username is too long" do
  	before { @user.email = "a" * 51 }
  	it { should_not be_valid }
  end

  describe "when email format is invalid" do
  	it "should be invalid" do
  	  addresses = %w[user@foo,com user_at_foo.org example.user@foo.
  	                 foo@bar_bz.com foo@bar+baz.com]
  	  addresses.each do |invalid_address|
  	    @user.email = invalid_address
  	    expect(@user).not_to be_valid
  	  end
  	end
  end

  describe "when email format is valid" do
  	it "should be valid" do
  	  addresses = %w[user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
  	  addresses.each do |valid_adddress|
  	  	@user.email = valid_adddress
  	  	expect(@user).to be_valid
  	  end
  	end
  end

  describe "when email address is already taken" do
  	before do
  	  user_with_same_email = @user.dup
  	  user_with_same_email = @user.email.upcase
  	  user_with_same_email.save
  	end

  	it { should_not be_valid }
  end
end
