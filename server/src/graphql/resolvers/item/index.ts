const itemResolvers = {
	Item: {
		deliveryAddress: async (parent, args, context, info) => {
			const { getAddressById } = context;
			return await getAddressById(parent.deliveryAddress);
		},
		scheduleLine: async (parent, args, context, info) => {
			const { getAllScheduleLinesByItem } = context;

			return (await getAllScheduleLinesByItem(parent.scheduleLine)) || null;
		},
	},
	Query: {
		item: async (parent, { id }, { getItemById }, info) => {
			return getItemById(id);
		},

		allItems: async (parent, args, { getAllItems }, info) => {
			return getAllItems();
		},
	},
	Mutation: {
		createItem: async (parent, { item }, context, info) => {
			const { createItem } = context;
			return await createItem(item);
		},

		updateItem: async (parent, { item }, context, info) => {
			const { updateItemById, createScheduleLine, updateScheduleLine } = context;

			let scheduleLine;
			if (item.scheduleLine) {
				scheduleLine = await createScheduleLine(item.scheduleLine);
			}

			const i = {
				id: item.id,
				itemNo: item.itemNo,
				productId: item.productId,
				description: item.description,
				quantity: item.quantity,
				uom: item.uom,
				unitPrice: item.unitPrice,
				totalAmount: item.totalAmount,
				deliveryAddress: item.deliveryAddress,
				supplierStatus: item.supplierStatus,
				scheduleLine: scheduleLine ? scheduleLine.id.toString() : null,
				currency: item.currency,
				dateUpdated: item.dateUpdated,
				timeUpdated: item.timeUpdated,
			};
			return await updateItemById(i);
		},

		deleteItem: async (parent, { id }, context, info) => {
			const { deleteItemById } = context;
			return await deleteItemById(id);
		},
	},
};

export default itemResolvers;
