class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  # GET /locations
  def index
    @locations = Location.all

    @wayy = ''

    @locations.each do |location|
      @wayy += "#{location.longitude},#{location.latitude};"
    end
    @endstr = @wayy.length - 1
    @way = @wayy[0...@endstr]
    @markers = @locations.geocoded.map do |location|
      {
        lat: location.latitude,
        lng: location.longitude,
        info_window: render_to_string(partial: "info_window", locals: { location: location })
      }
    end
  end

  # GET /locations/1
  def show
    @locations = Location.where(subject: 'test')

    @wayy = ''

    @locations.each do |location|
      @wayy += "#{location.longitude},#{location.latitude};"
    end
    @endstr = @wayy.length - 1
    @way = @wayy[0...@endstr]
    @markers = @locations.geocoded.map do |location|
      {
        lat: location.latitude,
        lng: location.longitude,
        info_window: render_to_string(partial: "info_window", locals: { location: location })
      }
    end
  end

  # GET /locations/new
  def new
    @locations = Location.new
  end

  # GET /locations/1/edit
  def edit
    @locations = Location.all
  end

  # POST /locations
  def create
    @location = Location.new(location_params)

    if @location.save
      redirect_to @location, notice: 'Location was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /locations/1
  def update
    if @location.update(location_params)
      redirect_to @location, notice: 'Location was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /locations/1
  def destroy
    @location.destroy
    redirect_to locations_url, notice: 'Location was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
  def set_location
    @location = Location.find(params[:id])
  end

    # Only allow a trusted parameter "white list" through.
  def location_params(*)
    params.require(:location).permit(:name, :address, :photo, :picture [])
  end
end
