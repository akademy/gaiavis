import csv

filenames = [
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
fields = ["ra", "dec", "phot_g_mean_flux"]

skipstars = [1000, 500, 250, 100, 50, 25, 10]

for skipstar in skipstars:
	filenameout = "stars_skip_" + str(skipstar) + ".csv"
	print( filenameout )

	with open( filenameout, "w" ) as csvfileout:
		datawriter = csv.writer(csvfileout)
		getfirstrow = True
		count = 0

		for csvfilename in filenames :
			print( csvfilename )

			with open(csvfilename, "r") as csvfile:

				datareader = csv.DictReader(csvfile)

				skiprow = True
				for row in datareader:

					if getfirstrow :
						datawriter.writerow(fields)
						getfirstrow = False

					if not skiprow :
						if count % skipstar == 0:  # Change 50 to produce more or less data
							datawriter.writerow([row[fields[0]], row[fields[1]], row[fields[2]]])

					skiprow = False
					count += 1

		print (count)