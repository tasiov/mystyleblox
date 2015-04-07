class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :edit, :update, :destroy]

  # GET /messages
  # GET /messages.json
  def index
    # @messages = Message.of_user(current_user)
    @sent_messages = current_user.sent_messages
    @received_messages = current_user.received_messages
  end
  # GET /messages/1
  # GET /messages/1.json
  def show
  end

  # GET /messages/new
  def new
    @message = Message.new
  end

  # GET /messages/1/edit
  def edit
  end

  def inbox
    @sent_messages = current_user.sent_messages
    @received_messages = current_user.received_messages
    @reply = Reply.new
    render :inbox
    @sent_messages.each do |msg|
      replies_arr = msg.replies
      replies_arr.each do |rply|
        if rply.sender.to_i != current_user.id
          rply.status = "read"
          rply.save
        end
      end
    end
    @received_messages.each do |msg|
      msg.status = "read"
      msg.save
      replies_arr = msg.replies
      replies_arr.each do |rply|
        if rply.sender.to_i != current_user.id
          rply.status = "read"
          rply.save
        end
      end
    end
  end

  # POST /messages
  # POST /messages.json
  def create
    @message = Message.new(message_params)
    @message.status = "unread"

    respond_to do |format|
      if @message.save
        format.html { redirect_to :back, notice: 'Message sent' }
        format.json { render :show, status: :created, location: @message }
      else
        format.html { render :new }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  def update
    respond_to do |format|
      if @message.update(message_params)
        format.html { redirect_to @message, notice: 'Message was successfully updated.' }
        format.json { render :show, status: :ok, location: @message }
      else
        format.html { render :edit }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /messages/1
  # DELETE /messages/1.json
  def destroy
    @message.destroy
    respond_to do |format|
      format.html { redirect_to messages_url, notice: 'Message was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def message_params
      params.require(:message).permit(:reciever_id, :title, :body) .merge(sender_id: current_user.id)
    end
end
