export default {
	users: [
		{
			_id: '1',
			userId: '001',
			userName: 'User Name1',
			password: '12345',
			userLevel: 'Admin',
		},
		{
			_id: '2',
			userId: '002',
			userName: 'User Name2',
			password: '12345',
			userLevel: 'Supplier',
		},
	],

	address: [
		{
			id: 'A1',
			building_name: 'building name',
			street: 'street',
			city: 'city',
			state: 'state',
			zip_code: 'zip_code',
		},
		{
			id: 'A2',
			building_name: 'building name 2',
			street: 'street 2',
			city: 'city 2',
			state: 'state 2',
			zip_code: 'zip_code 2',
		},
	],

	suppliers: [
		{
			_id: '1',
			supplierNo: '001',
			supplierName: 'Juan Dela Cruz',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '1234567',
			tin: '12345',
		},
		{
			supplierNo: '002',
			supplierName: 'Juan Dela Cruz',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '1234567',
			tin: '12345',
		},
	],

	supplierStatus: [
		{
			_id: '1',
			status: 'Dispatched',
			dateCreated: 'February 14, 2020',
			timeCreated: '4:30 PM',
		},
		{
			_id: '2',
			status: 'Delivered',
			dateCreated: 'February 14, 2020',
			timeCreated: '4:30 PM',
		},
	],

	scheduleLines: [
		{
			_id: '1',
			quantity: 10,
			uom: 'kilograms',
			deliveryDateAndTime: 'February 25,2020 4:30PM',
			unitPrice: 1000,
			totalAmount: 10000,
			deliveryStatus: [''],
		},
		{
			_id: '2',
			quantity: 10,
			uom: 'kilograms',
			deliveryDateAndTime: 'February 25,2020 4:30PM',
			unitPrice: 1000,
			totalAmount: 10000,
			deliveryStatus: [{ _id: '1', status: 'Pending', dateCreated: '03/03/2020', timeCreated: '4:30P M' }],
		},
	],

	items: [
		{
			_id: '1',
			itemNo: '001',
			description: 'Beef',
			productId: '0001',
			quantity: '10',
			uom: 'kg',
			unitPrice: '1000',
			discount: '10%',
			totalAmount: '9000',
			supplierStatusItem: 'Distpatched',
			deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			scheduleLine: [
				{
					_id: '1',
					quantity: '10',
					uom: 'kilograms',
					deliveryDateAndTime: 'February 25,2020 4:30PM',
					unitPrice: '1000',
					totalAmount: '10,000',
					deliveryStatus: [''],
				},
				{
					_id: '2',
					quantity: 'quantity',
					uom: 'uom',
					deliveryDateAndTime: 'dateandtime',
					unitPrice: 'unitPrice',
					totalAmount: '',
					deliveryStatus: [''],
				},
			],
			currency: 'PHP',
			dateUpdated: '',
			timeUpdated: '',
		},
		{
			_id: '2',
			itemNo: '002',
			description: 'Beef',
			productId: '0001',
			quantity: '10',
			uom: 'kg',
			unitPrice: '1000',
			discount: '10%',
			totalAmount: '9000',
			supplierStatusItem: 'Distpatched',
			deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			scheduleLine: [
				{
					_id: '1',
					quantity: '10',
					uom: 'kilograms',
					deliveryDateAndTime: 'February 25,2020 4:30PM',
					unitPrice: '1000',
					totalAmount: '10,000',
					deliveryStatus: [''],
				},
				{
					_id: '2',
					quantity: 'quantity',
					uom: 'uom',
					deliveryDateAndTime: 'dateandtime',
					unitPrice: 'unitPrice',
					totalAmount: '',
					deliveryStatus: [{ _id: '1', status: 'Pending', dateCreated: '03/03/2020', timeCreated: '4:30P M' }],
				},
			],
			currency: 'PHP',
			dateUpdated: '',
			timeUpdated: '',
		},
	],

	purchaseOrders: [
		{
			_id: '1',
			purchaseOrderNo: '001',
			shipmentNo: '123',
			adminStatus: 'status',
			supplierStatusHeader: 'supplierStatus',
			supplier: {
				supplierNo: '001',
				supplierName: 'Juan Dela Cruz',
				address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
				contactPerson: 'Basil Valdez',
				contactNumber: '1234567',
				tin: '12345',
			},
			postingDate: '03/03/20200',
			documentDate: '03/03/20200',
			vendorAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			items: [
				{
					_id: '1',
					itemNo: '001',
					description: 'Beef',
					productId: '0001',
					quantity: '10',
					uom: 'kg',
					unitPrice: '1000',
					discount: '10%',
					totalAmount: '9000',
					supplierStatusItem: 'Distpatched',
					deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
					scheduleLine: [
						{
							_id: '1',
							quantity: '10',
							uom: 'kilograms',
							deliveryDateAndTime: 'February 25,2020 4:30PM',
							unitPrice: '1000',
							totalAmount: '10,000',
							deliveryStatus: [''],
						},
						{
							_id: '2',
							quantity: 'quantity',
							uom: 'uom',
							deliveryDateAndTime: 'dateandtime',
							unitPrice: 'unitPrice',
							totalAmount: '',
							deliveryStatus: [''],
						},
					],
					currency: 'PHP',
					dateUpdated: '',
					timeUpdated: '',
				},
				{
					_id: '2',
					itemNo: '002',
					description: 'Beef',
					productId: '0001',
					quantity: '10',
					uom: 'kg',
					unitPrice: '1000',
					discount: '10%',
					totalAmount: '9000',
					supplierStatusItem: 'Distpatched',
					deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
					scheduleLine: [
						{
							_id: '1',
							quantity: '10',
							uom: 'kilograms',
							deliveryDateAndTime: 'February 25,2020 4:30PM',
							unitPrice: '1000',
							totalAmount: '10,000',
							deliveryStatus: [''],
						},
						{
							_id: '2',
							quantity: 'quantity',
							uom: 'uom',
							deliveryDateAndTime: 'dateandtime',
							unitPrice: 'unitPrice',
							totalAmount: '',
							deliveryStatus: [{ _id: '1', status: 'Pending', dateCreated: '03/03/2020', timeCreated: '4:30P M' }],
						},
					],
					currency: 'PHP',
					dateUpdated: '',
					timeUpdated: '',
				},
			],
		},
		{
			_id: '2',
			purchaseOrderNo: '002',
			shipmentNo: '123',
			adminStatus: 'status',
			supplierStatusHeader: 'supplierStatus',
			supplier: {
				supplierNo: '001',
				supplierName: 'Juan Dela Cruz',
				address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
				contactPerson: 'Basil Valdez',
				contactNumber: '1234567',
				tin: '12345',
			},
			postingDate: '03/03/20200',
			documentDate: '03/03/20200',
			vendorAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			items: [
				{
					_id: '1',
					itemNo: '001',
					description: 'Beef',
					productId: '0001',
					quantity: '10',
					uom: 'kg',
					unitPrice: '1000',
					discount: '10%',
					totalAmount: '9000',
					supplierStatusItem: 'Distpatched',
					deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
					scheduleLine: [
						{
							_id: '1',
							quantity: '10',
							uom: 'kilograms',
							deliveryDateAndTime: 'February 25,2020 4:30PM',
							unitPrice: '1000',
							totalAmount: '10,000',
							deliveryStatus: [''],
						},
						{
							_id: '2',
							quantity: 'quantity',
							uom: 'uom',
							deliveryDateAndTime: 'dateandtime',
							unitPrice: 'unitPrice',
							totalAmount: '',
							deliveryStatus: [''],
						},
					],
					currency: 'PHP',
					dateUpdated: '',
					timeUpdated: '',
				},
				{
					_id: '2',
					itemNo: '002',
					description: 'Beef',
					productId: '0001',
					quantity: '10',
					uom: 'kg',
					unitPrice: '1000',
					discount: '10%',
					totalAmount: '9000',
					supplierStatusItem: 'Distpatched',
					deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
					scheduleLine: [
						{
							_id: '1',
							quantity: '10',
							uom: 'kilograms',
							deliveryDateAndTime: 'February 25,2020 4:30PM',
							unitPrice: '1000',
							totalAmount: '10,000',
							deliveryStatus: [''],
						},
						{
							_id: '2',
							quantity: 'quantity',
							uom: 'uom',
							deliveryDateAndTime: 'dateandtime',
							unitPrice: 'unitPrice',
							totalAmount: '',
							deliveryStatus: [{ _id: '1', status: 'Pending', dateCreated: '03/03/2020', timeCreated: '4:30P M' }],
						},
					],
					currency: 'PHP',
					dateUpdated: '',
					timeUpdated: '',
				},
			],
		},
	],
};
