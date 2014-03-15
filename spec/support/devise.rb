# added /support because spec/models/user_spec.rb  with password kept failing
# undefined method 'autehnticate' for nil:NilClass
 
RSpec.configure do |config|
  config.include Devise::TestHelpers, type: :controller
end