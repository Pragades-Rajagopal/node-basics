const redis = require('redis');
const client = redis.createClient();

const task = process.argv[2];

client.on("error", (err) => {
	console.log("Error: ", err.message);
});

if (!task) {
	listTasks();
} else {
	addTask(task);
}

async function addTask(task) {
	const key = `Task:${Math.random().toString(32).replace('.', '')}`;
	try {
		client.hmset(key, {task});
		// listTasks();
	} catch (err) {
		console.log("error at add: ", err.message);
	}
};

async function listTasks() {
	client.keys("Task:*", (err, keys) => {
		if (err) {console.log("Error at list: ", err.message)};

		keys.forEach(key => {
			client.hgetall(key, (err, task) => {
				if (err) {console.log("Error at list1: ", err.message)};
				console.log(task);
			});
		});
		client.quit();
	});
};
