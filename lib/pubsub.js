import { PubSub } from "@google-cloud/pubsub";
const googleCloudServiceAccount = "./service-account-key.json";
const pubSubClient = new PubSub({ keyFilename: googleCloudServiceAccount });

export const publishMessage = async (topicName, data) => {
  const dataBuffer = Buffer.from(JSON.stringify(data));
  const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
  console.log(`Message ${messageId} published.`);
  return messageId;
};
