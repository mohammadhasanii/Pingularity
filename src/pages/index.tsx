import { useEffect, useState } from "react";

export default function Home() {
  const [pingValue, setPingValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(fetchPing, 2500);

    return () => clearInterval(interval);
  }, []);

  const fetchPing = async () => {
    try {
      const startTime = performance.now();
      const response = await fetch("https://c.amazon-adsystem.com/cdn/prod/config?src=3336&u=https%3A%2F%2Fwww.speedtest.net");

      if (!response.ok) {
        throw new Error("Erro ao obter ping.");
      }

      const data = await response.json();
      const endTime = performance.now();
      const ping = endTime - startTime;

      setPingValue(ping);
    } catch (error) {
      console.error("Erro ao obter ping:", error);
    }
  };

  return (
    <>
      <header className="flex shadow-lg flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <a className="flex-none font-bold text-xl  dark:text-white" href="">
            Pingularity
          </a>
          <div className="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:ps-5 sm:pb-0 sm:overflow-x-visible [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
            <a
              className=" text-blue-500 font-bold dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://github.com/mohammadhasanii/Pingularity"
              aria-current="page"
            >
              Source code
            </a>
          </div>
        </nav>
      </header>

      <div className="speed-controls-container centered mt-[10%] justify-center ">
        <div className="your-speed-message">
          <div
            id="your-speed-message"
            className="localized"
            loc-str="your_internet_speed"
          >
            Your Internet speed is
          </div>
        </div>
        <div className="speed-left-container  justify-center  ">
          <div className="bordered-speed-container">
            <div className="speed-results-container stopped" id="speed-value">
              {Math.floor(ping)}
            </div>
            <div
              className="error-message localized"
              id="unstable-results-msg"
              loc-str="unstable_connection"
            >
              * Your network is unstable. This number represents our estimate
              but actual network performance may vary
            </div>
            <div
              className="error-message localized"
              id="error-results-msg"
              loc-str="no_connection"
            >
              * Could not reach our servers to perform the test. You may not be
              connected to the internet
            </div>
          </div>
        </div>
        <div className="speed-right-container">
          <div className="speed-units-container stopped" id="speed-units">
            MS
          </div>

          <div className="w-24 h-24 p-5 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-24 h-2 bg-white animate-spin rounded-lg"></div>
          </div>
        </div>

        <div className="test-context-container" id="test-context-container">
          <div className="more-info-container centered">
            <a
              href="#"
              className="more-info-link localized"
              id="show-more-details-link"
              loc-str="show_more_info"
            >
              Show more info
            </a>
          </div>
          <div
            className="extra-details-container align-container "
            id="extra-details-container"
          >
            <div className="extra-metrics-container">
              <div
                className="extra-measurement-container latency-container"
                id="latency-container"
              >
                <div className="measurement-label localized" loc-str="latency">
                  Latency
                </div>
                <div className="latency-details-item">
                  <div
                    className="measurement-details-label localized"
                    loc-str="unloaded_latency"
                    id="latency-label"
                  >
                    Unloaded
                  </div>
                  <div className="extra-measurement-result">
                    <span
                      className="extra-measurement-value-container"
                      id="latency-value"
                    >
                      0
                    </span>
                    <span id="latency-units">ms</span>
                  </div>
                </div>
                <div className="latency-details-item">
                  <div
                    className="measurement-details-label localized"
                    loc-str="loaded_latency"
                    id="bufferbloat-label"
                  >
                    Loaded
                  </div>
                  <div className="extra-measurement-result">
                    <span
                      className="extra-measurement-value-container"
                      id="bufferbloat-value"
                    >
                      42
                    </span>
                    <span id="bufferbloat-units">ms</span>
                  </div>
                </div>
              </div>
              <div className="extra-measurement-container upload-container">
                <div className="measurement-label localized" loc-str="upload">
                  Upload
                </div>
                <div
                  className="measurement-details-label localized"
                  loc-str="upload_speed"
                  id="upload-label"
                >
                  Speed
                </div>
                <div className="extra-measurement-result">
                  <span
                    className="extra-measurement-value-container"
                    id="upload-value"
                  >
                    0
                  </span>
                  <span id="upload-units">Mbps</span>
                </div>
              </div>
            </div>
            <div className="test-info-container" id="test-info-container">
              <div className="test-info-group client">
                <span
                  className="test-info-location-header localized"
                  loc-str="client_info"
                >
                  Client
                </span>{" "}
                &nbsp;&nbsp;<span id="user-location">Khorramabad, IR</span>{" "}
                &nbsp;&nbsp;<span id="user-ip">185.143.207.168</span>{" "}
                &nbsp;&nbsp;
                <span id="user-isp" />
              </div>
              <div className="test-info-group server">
                <span
                  className="test-info-location-header localized"
                  loc-str="server_info"
                >
                  Server(s)
                </span>{" "}
                <span id="server-locations">
                  Muscat, OM&nbsp;&nbsp;|&nbsp;&nbsp;Ankara, TR
                </span>
              </div>
            </div>
            <table className="usage-info-container align-container ">
              <tbody>
                <tr>
                  <td>
                    <a href="#" id="settings-link">
                      <span className="oc-icon oc-icon-settings" />{" "}
                      <span className="localized" loc-str="settings_button">
                        Settings
                      </span>
                    </a>
                  </td>
                  <td>
                    <span id="down-mb-value">0.63</span>MB{" "}
                    <span className="oc-icon oc-icon-download" /> <br />
                  </td>
                  <td>
                    <span id="up-mb-value">0</span>MB{" "}
                    <span className="oc-icon oc-icon-upload" /> <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="test-config-container align-container "
            id="test-config-container"
          >
            <div className="config-item">
              <strong
                className="localized"
                loc-str="parallel_connections_config"
              >
                {" "}
                Parallel connections
              </strong>
              <br />
              <span className="localized" loc-str="min_config">
                Min:{" "}
              </span>{" "}
              <input
                className="test-text-config"
                type="number"
                id="min-connections-input"
                step={1}
                min={1}
                max={64}
              />
              <span className="localized config-label" loc-str="max_config">
                Max:{" "}
              </span>{" "}
              <input
                className="test-text-config"
                type="number"
                id="max-connections-input"
                step={1}
                min={1}
                max={64}
              />
            </div>
            <div className="config-item">
              <strong className="localized" loc-str="test_duration_config">
                {" "}
                Test duration (seconds)
              </strong>
              <br />
              <span className="localized" loc-str="min_config">
                Min:{" "}
              </span>{" "}
              <input
                className="test-text-config"
                type="number"
                id="min-duration-input"
                step={1}
                min={1}
                max={300}
              />
              <span className="localized config-label" loc-str="max_config">
                Max:{" "}
              </span>{" "}
              <input
                className="test-text-config"
                type="number"
                id="max-duration-input"
                step={1}
                min={1}
                max={300}
              />
            </div>
            <div className="config-item">
              <input
                type="checkbox"
                className="config-cbx"
                id="measure-latency-during-upload"
              />{" "}
              <label
                htmlFor="measure-latency-during-upload"
                className="localized config-label-cbx"
                loc-str="measure_loaded_during_upload"
              >
                Measure loaded latency during upload
              </label>
              <br />
              <input
                type="checkbox"
                className="config-cbx"
                id="always-show-metrics-input"
              />{" "}
              <label
                htmlFor="always-show-metrics-input"
                className="localized config-label-cbx"
                loc-str="always_show_config"
              >
                Always show all metrics
              </label>
              <br />
              <input
                type="checkbox"
                className="config-cbx"
                id="persist-config-input"
              />{" "}
              <label
                htmlFor="persist-config-input"
                className="localized config-label-cbx"
                loc-str="persist_config"
              >
                Save config for this device
              </label>
              <br />
            </div>
            <div className="test-config-controls">
              <a
                href="#"
                id="reset-config"
                className="test-config-btn localized"
                loc-str="reset_config"
              >
                Reset
              </a>
              <a
                href="#"
                id="apply-config"
                className="test-config-btn localized"
                loc-str="save_config"
              >
                Save
              </a>
              <a
                href="#"
                id="cancel-config"
                className="test-config-btn localized"
                loc-str="cancel_config"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="w-full max-w-[85rem] justify-center py-10 px-4 sm:px-6 lg:px-8 mx-auto 
      "
      >
        <div className="grid grid-cols-1  items-center gap-5 text-center mx-auto">
          <div className="md:text-end space-x-2 mx-auto">
            <a
              className="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://mohammadhasanii.ir"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://twitter.com/code_mohammad"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              className="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://github.com/mohammadhasanii"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
