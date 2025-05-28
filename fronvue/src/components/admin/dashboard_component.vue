<template>
  <div>
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Total Libros Compartidos
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{ total_posts }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-book fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Usuarios
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{ total_users }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-users fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Porcentaje Libros Leídos
                  </div>
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        {{ per_books_read }}%
                      </div>
                    </div>
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div class="progress-bar bg-info" role="progressbar" :style="{ width: per_books_read + '%' }"
                          aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Total Comments
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    18
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Row -->

      <div class="row">
        <!-- Area Chart -->
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-gray-800">
                Libros Compartidos por Mes
              </h6>
              
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="chart-area">
                <canvas id="myAreaChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-gray-800">
                Categorias de Publicaciones
              </h6>
              <!-- <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink">
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div> -->
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class=" pt-4 pb-2">
                <canvas id="myPieChart" width="600" height="600"></canvas>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import Chart from 'chart.js';
import apiClient from '@/services/ApiService';

export default {

  data() {
    return {
      total_users: 0,
      per_books_read: 0,
      total_posts: 0,
      books_per_month: [],
      posts_by_category: [],

    };
  },

  async mounted() {
    const token = localStorage.getItem('authToken');

    try {
      if (token) {
        const response = await apiClient.get('/admin/dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response.data);
        this.total_posts = response.data.total_posts;
        this.per_books_read = Math.round(response.data.per_books_read * 100) / 100;
        this.total_users = response.data.total_users;
        this.books_per_month = response.data.posts_per_month;

      }
    } catch (error) {
      console.error('Error:', error);
    }

    try {
      const res = await apiClient.get('/admin/categories/post-count', {
        headers: { Authorization: `Bearer ${token}` }
      });
      this.posts_by_category = res.data;
    } catch (e) {
      console.error('Error cargando posts por categoría', e);
    }


    // Gráfico de líneas: Libros compartidos por mes (solo año actual)
    const areaCtx = document.getElementById('myAreaChart');
    if (areaCtx) {

      // Etiquetas y datos
      const labels = this.books_per_month.map(item => item.month.trim());
      const data = this.books_per_month.map(item => parseInt(item.totalposts, 10));

      new Chart(areaCtx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Libros compartidos',
            data: data,
            backgroundColor: 'rgba(54, 185, 204, 0.1)',
            borderColor: '#36b9cc',
            borderWidth: 2,
            pointBackgroundColor: '#36b9cc',
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Libros compartidos por mes (Año actual)'
          }
        }
      });
    }

    // Gráfico de pastel: Distribución de usuarios por actividad
    const pieCtx = document.getElementById('myPieChart');
    if (pieCtx && this.posts_by_category.length > 0) {
      console.log(this.posts_by_category);
      const labels = this.posts_by_category.map(item => item.category);
      const data = this.posts_by_category.map(item => parseInt(item.total, 11));
      new Chart(pieCtx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              '#4e73df', '#1cc88a', '#f6c23e', '#e74a3b', '#36b9cc',
              '#858796', '#fd7e14', '#20c997', '#6f42c1', '#343a40',
              '#f8f9fc', '#007bff', '#6610f2', '#e83e8c', '#dc3545',
            ],

          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Posts por Categoría'
          },
        }
      });
    }
  }
};
</script>

<style type="text/css" scoped>
@keyframes chartjs-render-animation {
  from {
    opacity: .99
  }

  to {
    opacity: 1
  }
}

.chartjs-render-monitor {
  animation: chartjs-render-animation 1ms
}

.chartjs-size-monitor,
.chartjs-size-monitor-expand,
.chartjs-size-monitor-shrink {
  position: absolute;
  direction: ltr;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  visibility: hidden;
  z-index: -1
}

.chartjs-size-monitor-expand>div {
  position: absolute;
  width: 1000000px;
  height: 1000000px;
  left: 0;
  top: 0
}

.chartjs-size-monitor-shrink>div {
  position: absolute;
  width: 200%;
  height: 200%;
  left: 0;
  top: 0
}

.chart-area {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0 auto;
}
</style>