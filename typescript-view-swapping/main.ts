const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');
if (!$tabContainer) throw new Error('$tabContainer query failed');
if (!$tabList) throw new Error('$tabList query failed');
if (!$viewList) throw new Error('$viewList query failed');

$tabContainer.addEventListener('click', tabSwitcher);

function tabSwitcher(event: Event): void {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    console.log('$eventTarget: ', $eventTarget);
    for (let i = 0; i < $tabList.length; i++) {
      if ($eventTarget.dataset.view === $tabList[i].getAttribute('data-view')) {
        console.log('$eventTarget.dataset.view: ', $eventTarget.dataset.view);
        $tabList[i].className = 'tab active';
        $viewList[i].className = 'view';
      } else {
        $tabList[i].className = 'tab';
        $viewList[i].className = 'view hidden';
      }
    }
  }
}
