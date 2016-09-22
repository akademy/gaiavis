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
with open("stars.csv", "w") as csvfileout:
	datawriter = csv.writer(csvfileout)
	getfirstrow = True

	count = 0
	for csvfilename in filenames :
		print ( csvfilename )

		with open(csvfilename, "r") as csvfile:

			datareader = csv.reader(csvfile)

			skiprow = True
			for row in datareader:

				if getfirstrow :
					datawriter.writerow(row)
					getfirstrow = False

				if not skiprow :
					if count % 50 == 0:  # Change 50 to produce more or less data
						datawriter.writerow(row)

				skiprow = False
				count += 1

	print (count)