const chartFont = {
  family: "Space Grotesk, sans-serif",
  size: 12
};

Chart.defaults.color = "#2b3d4d";
Chart.defaults.font = chartFont;

if (window.ChartDataLabels) {
  Chart.register(window.ChartDataLabels);
}

function toBanglaDigits(value) {
  return String(value).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[Number(d)]);
}

function createBeneficiaryChart() {
  const ctx = document.getElementById("beneficiaryChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "শিক্ষিত বেকার/নিম্নবেতন যুব",
        "আলিয়া মাদ্রাসা",
        "কওমী মাদ্রাসা",
        "গ্রামীণ দরিদ্র কৃষক/শ্রমিক"
      ],
      datasets: [
        {
          label: "উপকারভোগী (লক্ষ)",
          data: [20, 10, 8, 22],
          backgroundColor: ["#006d77", "#0aa8b6", "#83c5be", "#e29578"],
          borderRadius: 8,
          maxBarThickness: 56
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 24
        }
      },
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: "end",
          align: "end",
          offset: 2,
          color: "#17324a",
          font: {
            family: "Space Grotesk, sans-serif",
            weight: "700",
            size: 12
          },
          formatter: value => `${toBanglaDigits(value)} লক্ষ`
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "লক্ষ" }
        }
      }
    }
  });
}

function createBudgetChart() {
  const ctx = document.getElementById("budgetChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [
        "অবকাঠামো",
        "মাদ্রাসা সংযুক্তি",
        "গ্রামীণ কর্মসংস্থান",
        "আন্তর্জাতিক সংযোগ",
        "উদ্যোক্তা তহবিল",
        "ডিজিটাল সিস্টেম",
        "প্রশাসনিক ব্যয়"
      ],
      datasets: [
        {
          label: "কোটি টাকা",
          data: [6000, 1500, 2500, 2000, 2500, 1000, 1000],
          backgroundColor: [
            "#006d77",
            "#0aa8b6",
            "#83c5be",
            "#edf6f9",
            "#ffddd2",
            "#e29578",
            "#b56576"
          ]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
}

function createTrackChart() {
  const ctx = document.getElementById("trackChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "আইটি/ডিজিটাল",
        "কারিগরি ট্রেড",
        "কৃষি ও এগ্রো",
        "স্টার্টআপ",
        "হসপিটালিটি",
        "কেয়ারগিভিং"
      ],
      datasets: [
        {
          label: "দেশীয় অগ্রাধিকার",
          data: [88, 74, 90, 82, 55, 48],
          backgroundColor: "rgba(0, 109, 119, 0.14)",
          borderColor: "#006d77",
          pointBackgroundColor: "#006d77",
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.62,
          cubicInterpolationMode: "monotone",
          fill: true
        },
        {
          label: "বিদেশি বাজার অগ্রাধিকার",
          data: [62, 84, 70, 50, 78, 86],
          backgroundColor: "rgba(226, 149, 120, 0.16)",
          borderColor: "#e29578",
          pointBackgroundColor: "#e29578",
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.62,
          cubicInterpolationMode: "monotone",
          fill: true
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom"
        },
        datalabels: {
          formatter: value => toBanglaDigits(value),
          color: "#ffffff",
          anchor: "end",
          align: "bottom",
          offset: 6,
          clamp: true,
          backgroundColor: context => context.dataset.borderColor,
          borderRadius: 6,
          padding: {
            top: 3,
            right: 6,
            bottom: 3,
            left: 6
          },
          font: {
            family: "Space Grotesk, sans-serif",
            weight: "700",
            size: 10
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 100,
          title: {
            display: true,
            text: "Priority Score"
          }
        },
        x: {
          ticks: {
            maxRotation: 30,
            minRotation: 0
          }
        }
      }
    }
  });
}

function createCountryChart() {
  const ctx = document.getElementById("countryChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["Middle East", "Asia", "Europe", "America & Canada"],
      datasets: [
        {
          label: "Demand Intensity",
          data: [38, 24, 22, 16],
          backgroundColor: ["#006d77", "#0aa8b6", "#83c5be", "#e29578"]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });
}

function setupRevealAnimation() {
  const sections = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => observer.observe(section));
}

function init() {
  createBeneficiaryChart();
  createBudgetChart();
  createTrackChart();
  createCountryChart();
  setupRevealAnimation();
}

document.addEventListener("DOMContentLoaded", init);
