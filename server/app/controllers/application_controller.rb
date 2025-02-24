class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  protected

  def current_user
    return @current_user if defined?(@current_user)

    if session[:token].nil?
      @current_user = nil
      return
    end

    user_session = UserSession.find_by(token: session[:token])
    if user_session.present? && !user_session.expired?
      @current_user = user_session.user
    else
      @current_user = nil
    end
  end

  def authenticate
    head :unauthorized unless current_user
  end
end
