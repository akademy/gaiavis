import csv

source_csv_filenames = [
	"tgas/TgasSource_000-000-000.csv",
	"tgas/TgasSource_000-000-001.csv",
	"tgas/TgasSource_000-000-002.csv",
	"tgas/TgasSource_000-000-003.csv",
	"tgas/TgasSource_000-000-004.csv",
	"tgas/TgasSource_000-000-005.csv",
	"tgas/TgasSource_000-000-006.csv",
	"tgas/TgasSource_000-000-007.csv",
	"tgas/TgasSource_000-000-008.csv",
	"tgas/TgasSource_000-000-009.csv",
	"tgas/TgasSource_000-000-010.csv",
	"tgas/TgasSource_000-000-011.csv",
	"tgas/TgasSource_000-000-012.csv",
	"tgas/TgasSource_000-000-013.csv",
	"tgas/TgasSource_000-000-014.csv",
	"tgas/TgasSource_000-000-015.csv"
]
field_settings = [
	{
		"names" : ["ra", "dec"],
		"fields" : ["ra", "dec"]
	},
	{
		"names" : ["ra", "dec", "flux"],
		"fields" : ["ra", "dec", "phot_g_mean_flux"]
	},
	{
		"names" : ["ra", "dec", "flux", "l", "b"],
		"fields" : ["ra", "dec", "phot_g_mean_flux", "l", "b"]
	}
]

# Create csvs with these "skip" numbers
skip_stars = [1000, 500, 250, 100, 50, 25, 10]

for field_setting in field_settings :

	file_fields = "[" + "-".join( field_setting["names"] ) + "]"

	for skip_star in skip_stars:
		filename_out = "csvs2/stars_skip" + str( skip_star ) + "_" + file_fields + ".csv"
		print(filename_out)

		with open( filename_out, "w" ) as csvfile_out:
			datawriter = csv.writer( csvfile_out )
			getfirstrow = True
			count = 0

			for csvfilename in source_csv_filenames :
				print( csvfilename )

				with open( csvfilename, "r" ) as csvfile:

					datareader = csv.DictReader( csvfile )

					skiprow = True
					for row in datareader:

						if getfirstrow :
							datawriter.writerow( field_setting["names"] )
							getfirstrow = False

						if not skiprow :
							if count % skip_star == 0:

								row_write = []
								for field in field_setting["fields"]:
									row_write.append( row[field] )

								datawriter.writerow(row_write)

						skiprow = False
						count += 1

			print( count )

