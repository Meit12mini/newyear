enum ModelStatus {
  Opened = 1,
  Closed = 0,
}

console.log(ModelStatus);

const modal = buildModal("hexlet forever", ModelStatus.Opened);

function buildModal(text: string, status: ModelStatus.Opened) {
  // a:Object = {'text': text,'status':status}
  // confirm.log(a)
  const a: Object = {
    text: text,
    status: status,
  };
  console.log(a);
}
