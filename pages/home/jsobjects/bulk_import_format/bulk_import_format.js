export default {
	replace_single_quote: bulk_import_filepicker.files[0].data.map(data => {
		data.title = data.title.replace(/'/g, "")
		data.original_title = data.original_title.replace(/'/g, "")
		data.tagline = data.tagline.replace(/'/g, "")
		data.overview = data.overview.replace(/'/g, "")
		data.production_companies = data.title.replace(/'/g, "")
		return data
	})
}