function status(request, response) {
  response.status(200).json({ n: "hoje é dia 8" });
}

export default status;
